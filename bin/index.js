#! /usr/bin/env node
const program = require('commander')
const chalk = require('chalk')
const figlet = require('figlet')

program.command('create <name>').description('创建一个项目')
  .option('-f, --force', '强制创建，覆盖当前文件夹') // 是否强制创建，当文件夹已经存在
  .action((name, options) => {
    require('../lib/create.js')(name, options)
  })

program
  // 监听 --help 执行
  .on('--help', () => {
    console.log('\r\n' + figlet.textSync('Evans', {
      font: 'Ghost',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    }));


  })

program
  // 配置版本号信息
  .version(`v${require('../package.json').version}`)
  .usage('<command> [option]')

program.parse(process.argv)