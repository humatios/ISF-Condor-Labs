CREATE TABLE user_profile(id_user INTEGER PRIMARY KEY ASC, nm_first, nm_middle, nmlast);

CREATE TABLE user_address(
  id_address INTEGER PRIMARY KEY ASC,
  id_user INTEGER,
  FOREIGN KEY(id_user) REFERENCES user_profile(id_user)
);

CREATE TABLE user_role(
  id_entity INTEGER PRIMARY KEY ASC,
  cd_role_type TEXT,
  in_status INTEGER NOT NULL,
  id_user INTEGER,
  FOREIGN KEY(id_user) REFERENCES user_profile(id_user)
);

INSERT INTO user_profile (id_user,nm_first, nm_middle, nmlast)
VALUES (5, 'Test Name5', '', 'Test Last5');

INSERT INTO user_address (id_address,id_user)
VALUES (3, 3);

INSERT INTO user_role (id_entity,cd_role_type, in_status,id_user)
VALUES (5,'PROVIDER​',0, 5);


/*Report Nº1*/
SELECT cd_role_type AS "User Type",
  COUNT(in_status) AS "Total Active",
  COUNT(nm_middle) as "No Middle name"
FROM user_role
INNER JOIN user_profile
 ON user_role.id_user = user_profile.id_user
WHERE in_status == 0
  AND nm_middle == ''
GROUP BY cd_role_type;

/*Report Nº2*/
SELECT COUNT(cd_role_type) AS "Active Licensees With Address Info"
FROM user_role
INNER JOIN user_profile
 ON user_role.id_user = user_profile.id_user
INNER JOIN user_address as address
 ON user_profile.id_user = address.id_user
WHERE cd_role_type == 'LICENSEE'
  OR cd_role_type == 'LIMITED​'
  AND address.id_address != '';

/*Report Nº3*/
SELECT COUNT(DISTINCT id_user)  AS "Non-active Providers"
FROM user_role
WHERE in_status == 0
  AND cd_role_type == 'PROVIDER​';