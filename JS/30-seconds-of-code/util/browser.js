/*
  将一个数组以li标签的形式插入到id为listID的元素内
*/
export const arrayToHtmlList = (arr, listID) => (
  el => (
    (el = document.querySelector(`#${listID}`)),
    (el.innerHTML += arr.map(item => `<li>${item}</li>`).join(''))
  )
)()

/*
    页面底部是否在视窗内
*/
export const bottomVisible = () => {
  return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
}

// 复制到粘贴板 生成<textarea> -> 赋值 -> Selection.getRangeAt()存储值 -> document.execCommand('copy')复制到粘贴板 ->
export const copyToClipboard = (str) => {
  // 生成<textarea> -> 赋值
  const el = document.createElement('textarea');
  el.value = str;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false;
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
  if (selected) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(selected);
  }
  alert('复制成功')
}

// 计数器
export const counter = (selector, start, end, step = 1, duration = 2000) => {
  let current = start,
    _step = (end - start) * step < 0 ? -step : step,
    timer = setInterval(() => {
      current += _step;
      document.querySelector(selector).innerHTML = current;
      if (current >= end) document.querySelector(selector).innerHTML = end;
      if (current >= end) clearInterval(timer);
    }, Math.abs(Math.floor(duration / (end - start))));
  return timer;
};