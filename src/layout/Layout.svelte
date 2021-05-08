<script>
  import Nav from './Nav.svelte'
  import Drawer from 'components/Material/Drawer.svelte'
  import AppBar from 'components/Material/AppBar.svelte'
  import Folder from 'components/Folder.svelte'
  import Grid from 'components/Material/Grid.svelte'
  import ElementAndText from 'components/Material/ElementAndText.svelte'
  import Icon from 'components/Material/Icon.svelte'
  import Avatar from 'components/Material/Avatar.svelte'
  import Table from 'components/Material/Table/Table.svelte'
  import TableRow from 'components/Material/Table/TableRow.svelte'
  import TableCell from 'components/Material/Table/TableCell.svelte'
  import TableHead from 'components/Material/Table/TableHead.svelte'
  import { mdiTextBoxOutline, mdiGoogleDrive } from '@mdi/js'
</script>

<div class="app-content">
  <AppBar>
    <h1 slot="title">ThinkDrive</h1>
  </AppBar>

  <div class="layout">
    <Drawer>
      <Nav />
    </Drawer>
    <div class="main">
      <div class="quick-access">
        <h3>Quick Access</h3>
        <Grid container>
          <Grid>
            <Folder>Folder 1</Folder>
          </Grid>
          <Grid>
            <Folder>Folder 2</Folder>
          </Grid>
          <Grid>
            <Folder>Folder 3</Folder>
          </Grid>
        </Grid>
      </div>
      <div class="folders">
        <h3>Folders</h3>
        <Grid container>
          <Grid>
            <Folder>Folder 1</Folder>
          </Grid>
          <Grid>
            <Folder>Folder 2</Folder>
          </Grid>
          <Grid>
            <Folder>Folder 3</Folder>
          </Grid>
        </Grid>
      </div>
      <div class="files">
        <h3>Files</h3>
        <Table>
          <thead>
            <TableRow>
              <TableHead>
                <h3>Name</h3>
              </TableHead>
              <TableHead>
                <h3>Location</h3>
              </TableHead>
              <TableHead>
                <h3>Owner</h3>
              </TableHead>
              <TableHead>
                <h3>Last modified</h3>
              </TableHead>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableCell>
                <ElementAndText>
                  <Icon slot="element" icon={mdiTextBoxOutline} />
                  <span slot="text">My file</span>
                </ElementAndText>
              </TableCell>
              <TableCell width="250px">
                <ElementAndText>
                  <Icon slot="element" icon={mdiGoogleDrive} />
                  <span slot="text">Google Drive</span>
                </ElementAndText>
              </TableCell>
              <TableCell width="200px">
                <ElementAndText>
                  <Avatar slot="element" image="portrait.jpg" alt="avatar" />
                  <span slot="text">Me</span>
                </ElementAndText>
              </TableCell>
              <TableCell width="200px">
                <span>Today</span>
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
      </div>
    </div>
  </div>
</div>

<style>
  .app-content {
    height: 100%;
    --app-bar-height: 64px;
    font-family: var(--typography-font-family, Roboto);
  }
  .layout {
    display: flex;
    height: calc(100% - var(--app-bar-height, 0));
  }
  .main {
    width: 100%;
    padding: 10px 25px;
  }
  .folders,
  .quick-access {
    margin-bottom: 20px;
  }

  .quick-access {
    margin-top: 10px;
  }
</style>
