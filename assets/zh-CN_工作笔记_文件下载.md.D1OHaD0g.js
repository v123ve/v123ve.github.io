import{_ as o,c as t,j as e,a as r,o as a}from"./chunks/framework.BaR4VHXY.js";const b=JSON.parse('{"title":"文件下载","description":"","frontmatter":{"Created at":"2023-09-05T00:00:00.000Z","Last updated at":"2023-09-05T00:00:00.000Z"},"headers":[],"relativePath":"zh-CN/工作笔记/文件下载.md","filePath":"zh-CN/工作笔记/文件下载.md","lastUpdated":null}'),l={name:"zh-CN/工作笔记/文件下载.md"};function s(d,n,c,p,i,m){return a(),t("div",null,n[0]||(n[0]=[e("h1",{id:"文件下载",tabindex:"-1"},[r("文件下载 "),e("a",{class:"header-anchor",href:"#文件下载","aria-label":'Permalink to "文件下载"'},"​")],-1),e("pre",null,[e("code",null,`// 强制下载文件方法
export function downloadFileWithTokenForce(
  downloadSrc = '',
  tokenSplit = '?',
  downloadName = '',
  token = '',
) {
  return new Promise(resolve => {
    message.info(\`请耐心等待下载【\${downloadName}】\`);
    const log = {
      moduleName: '主页面',
      oprContent: '主页面',
      oprType: OprType.业务操作,
      oprSubType: OprSubType.下载,
    };
    const downloadUrl = \`\${downloadSrc
      .replace(/:\\\\/g, '/')
      .replace(/\\/\\//g, '/')
      .replace(/http:\\//g, 'http://')
      .replace(/https:\\//g, 'https://')}\${tokenSplit}token=\${token || getToken()}\`;
    fetch(downloadUrl)
      .then(
        res => res.blob(),
        () => {
          Log.saveOperationLog({
            ...log,
            oprResult: OprResult.ERROR,
            oprDescription: \`下载【\${downloadName}】失败\`,
          });
          resolve(true);
        },
      )
      .then(
        blob => {
          const a = document.createElement('a');
          const objectUrl = window.URL.createObjectURL(blob);
          a.download = downloadName;
          a.href = objectUrl;
          a.click();
          window.URL.revokeObjectURL(objectUrl);
          a.remove();
          Log.saveOperationLog({
            ...log,
            oprResult: OprResult.SUCCESS,
            oprDescription: \`下载【\${downloadName}】成功\`,
          });
          resolve(true);
        },
        () => {
          Log.saveOperationLog({
            ...log,
            oprResult: OprResult.ERROR,
            oprDescription: \`下载【\${downloadName}】失败\`,
          });
          resolve(true);
        },
      );

    // let x = new XMLHttpRequest();
    // x.open('GET', link, true);
    // x.responseType = 'blob';
    // x.onload = e => {
    //   let url = window.URL.createObjectURL(x.response);
    //   let a = document.createElement('a');
    //   a.href = url;
    //   a.click();
    //   setTimeout(() => {
    //     a.remove();
    //     a = null;
    //   }, 10000);
    // };
    // x.onerror = () => {
    //   downloadFileWithToken(downloadSrc);
    // };
    // x.send();

    // const iframe = document.createElement("iframe");
    // iframe.setAttribute("hidden","hidden");
    // document.body.appendChild(iframe);
    // iframe.onload = () => {
    //   if(iframe){
    //     iframe.setAttribute('src','about:blank');
    //   }
    // };
    // iframe.setAttribute("src",url);

    // axios(url, {
    //   method: 'get',
    //   responseType: 'blob',
    //   onDownloadProgress: (evt: any) => {
    //     console.log('progress: ' + progress + '%')
    //   },
    // }).then(res => {
    //   const type = res.headers['content-type'] //请求头中文件类型
    //   const blob = new Blob([res.data])
    //   const a = document.createElement('a')
    //   a.download = name + '.' + type?.replace('video/', '')
    //   a.href = URL.createObjectURL(blob)
    //   a.click()
    //   URL.revokeObjectURL(a.href)
    //   a.remove()
    // })
  });
}
`)],-1)]))}const h=o(l,[["render",s]]);export{b as __pageData,h as default};
