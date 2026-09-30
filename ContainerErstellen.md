# Container erstellen

Zuerst Podman installieren

Danach:
* `podman machine start`
* `PS C:\Users\U66317> podman run -d --name rubiks-db -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Wuerfel_123!" -e "MSSQL_PID=Express" -p 1433:1433 -v shopdb-data:/var/opt/mssql mcr.microsoft.com/mssql/server:2022-latest`
  * Passwort der DB: **Wuerfel_123!**
* `podman ps` zum überprüfen, ob der Container aktiv ist
