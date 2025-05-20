---

Created at: 2020-08-11
Last updated at: 2020-09-11
tags: 
  - 测试
  - mock

---

# mock示例


#### mock示例

    import { delay } from 'roadhog-api-doc';
    import mockjs, { Random } from 'mockjs';
    
    // 磁盘状态
    const DISKSTATUS = [
      // 未格式化
      'unformatted',
      // 损坏
      'damage',
      // 正常
      'normal',
      // 无效
      'invalid',
      // 离线
      'offline',
    ];
    // 磁盘类型
    const DISKTYPE = [
      // 本地磁盘
      'localDisk',
      // Raid磁盘
      'raidDisk',
      // 热备盘
      'hotBackupDisk',
    ]
    // Raid状态
    const RAIDSTATE = [
      // 正常
      'normal',
      // 降级
      'downgrade',
      // 同步
      'syn',
      // 失败
      'failed',
    ];
    // Raid磁盘状态
    const RAIDDISKSTATE = [
      // 正常
      'normal',
      // 降级
      'downgrade',
      // 同步
      'syn',
      // 丢失
      'lose',
      // 新盘
      'newdisk',
    ];
    const proxy = {
      // 查询产品槽位信息
      'GET /api/commonbackupsystem/storagemanage/slotList': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
        data: {
          slotList: [...Array(16)].map((v, i) => ({
            id: i + 1,
            slotID: i + 1,
            storagePoolID: '',
            isOperable: 1,
            sortNumber: i + 1,
          })),
        },
      }),
      // 查询磁盘列表
      'GET /api/commonbackupsystem/storagemanage/diskList': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
        data: {
          diskList: [...Array(16)].map((v, i) => ({
            slotID: i + 1,
            diskName: `磁盘${i + 1}`,
            diskLetter: String.fromCharCode(i + 65),
            diskSeq: String.fromCharCode(i + 65),
            diskCapacity: Random.natural(500, 1000),
            diskUseableCapacity: Random.natural(400, 500),
            'diskStatus|1': DISKSTATUS,
            isOperable: 1,
            'diskType|1': DISKTYPE,
          })),
        },
      }),
      // 查询Raid列表
      'GET /api/commonbackupsystem/storagemanage/RAIDList': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
        data: {
          RAIDList: [...Array(6)].map((v, i) => ({
            raidLetter: String.fromCharCode(i + 65),
            raidName: `Raid${i + 1}`,
            raidType: 'raid5',
          })),
        },
      }),
      // 查询Raid详情
      'GET /api/commonbackupsystem/storagemanage/RAIDInfo': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
        data: {
          RAIDInfo: {
            id: 1000,
            raidLetter: 'A',
            raidName: 'Raid1',
            raidType: 'raid5',
            diskNum: 6,
            totalSize: 5000,
            usableSize: 4000,
            'raidState|1': RAIDSTATE,
            updateTime: Random.now(),
            diskList: [...Array(6)].map((v, i) => ({
              diskSeq: String.fromCharCode(i + 65),
              'diskState|1': RAIDDISKSTATE,
            })),
          },
        },
      }),
      // 新增Raid
      'POST /api/commonbackupsystem/storagemanage/RAIDInfo': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
        data: {
          raidLetter: 'B',
          totalSize: 3800,
          usableSize: 2500,
          'raidState|1': RAIDSTATE,
          updateTime: Random.now(),
          diskList: [...Array(6)].map((v, i) => ({
            diskSeq: String.fromCharCode(i + 75),
            'diskState|1': RAIDDISKSTATE,
          })),
        },
      }),
      // 更新Raid名称
      'PUT /api/commonbackupsystem/storagemanage/RAIDInfo': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
      }),
      // 删除Raid
      'DELETE /api/commonbackupsystem/storagemanage/RAIDInfo': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
      }),
      // 编辑热备盘
      'POST /api/commonbackupsystem/storagemanage/hotBackupDisk': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
      }),
      // 激活Raid
      'POST /api/commonbackupsystem/storagemanage/RAIDList': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
      }),
      // 修复Raid
      'PUT /api/commonbackupsystem/storagemanage/RAIDList': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
      }),
      // 格式化Raid
      'PUT /api/commonbackupsystem/storagemanage/RAIDFormat': mockjs.mock({
        result: {
          code: 200,
          message: 'success',
        },
        SN: Random.word(5, 10),
      }),
    };
    
    // 调用 delay 函数，统一处理
    export default delay(proxy, 1 * 1000);

