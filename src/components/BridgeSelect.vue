<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
       <span>Select your bridge</span>
       <el-button style="float: right; padding: 3px 0" type="text">Refresh</el-button>
      </div>

      <el-table border :default-expand-all="bridges.length === 1" :show-header="false" :data="bridges" style="width: 100%">
        <el-table-column type="expand">
          <template slot-scope="props" >
            <p>Software Version: {{ props.row.softwareVersion }}</p>
            <p>ID: {{ props.row.id }}</p>
            <p>Mac: {{ props.row.mac }}</p>
          </template>
        </el-table-column>

        <el-table-column label="Name" prop="name">
        </el-table-column>

        <el-table-column label="IP" prop="ipAddress">
        </el-table-column>

        <el-table-column label="Command">
          <template slot-scope="scope">
            <div align="center">
              <el-button size="mini" @click="selectBridge(scope.row)">Select</el-button>
            </div>
          </template>
        </el-table-column>

      </el-table>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'bridgeselect',
  methods: {
    selectBridge: function(bridge) {
      this.$router.push({ name: 'huesystem', params: { bridge: bridge } })
    }
  },
  data() {
    return {
      msg: 'Select your bridge',
      bridges: [
        {
          name: 'Hue Bridge work',
          softwareVersion: '123123123',
          ipAddress: '192.168.2.2',
          id: '111111111111111111111111',
          mac: '00:00:00:00:00'
        },
        {
          name: 'Hue bridge home',
          softwareVersion: '123123123',
          ipAddress: '192.168.12.12',
          id: '222222222222222222222',
          mac: '00:00:00:00:00'
        }
      ]
    }
  }
}
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
