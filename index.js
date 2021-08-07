function jump(domID) {
  $("html,body").animate({
    scrollTop: $(domID).offset().top
  }, 500);
}

function submitHandler() {
  var to = "leopardx602@gmail.com"
  var name = nameText.value
  var email = emailText.value
  var tel = telText.value
  var subject = subText.value

  var body = "" + bodyText.value + '%0A%0A%0A' //%0A是換行 換了三行
  body += "From：" + nameText.value + '%0A'
  body += "Email：" + emailText.value + '%0A'
  body += "Tel：" + telText.value

  mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body
  mailTo.click()
}