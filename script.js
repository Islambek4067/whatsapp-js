const workspaceSetting = document.querySelector('.workspace-setting')
const settingIcon = document.querySelector('.setting-icon')
const chatSettingIcon = document.querySelector('.chat-setting-icon')
const chatSetting = document.querySelector('.chat-setting')
const downloadInf = document.querySelector('.download-inf')
const downloadAppIcon = document.querySelector('.download-app-icon')
settingIcon.addEventListener('click', ()=>{
  workspaceSetting.classList.toggle('show')
  downloadInf.classList.remove('show')
  chatSetting.classList.remove('show')
})

chatSettingIcon.addEventListener('click', ()=>{
  chatSetting.classList.toggle('show')
  downloadInf.classList.remove('show')
  workspaceSetting.classList.remove('show')
})

downloadAppIcon.addEventListener('click', ()=>{
  downloadInf.classList.toggle('show')
  chatSetting.classList.remove('show')
  workspaceSetting.classList.remove('show')
})


