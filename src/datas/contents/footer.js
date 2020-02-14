const createUrlObj = require('../utils').createUrlObj
 let id = 0

const banksRaw = [
  { id: id++, name: `上海总行`, url: `#`, isInternal: false },
  { id: id++, name: `厦门分行`, url: `#`, isInternal: false },
  { id: id++, name: `杭州分行`, url: `#`, isInternal: false },
  { id: id++, name: `义乌分行`, url: `#`, isInternal: false },
  { id: id++, name: `温州分行`, url: `#`, isInternal: false },
  { id: id++, name: `天津分行`, url: `#`, isInternal: false },
  { id: id++, name: `宁波分行`, url: `#`, isInternal: false },
  { id: id++, name: `成都分行`, url: `#`, isInternal: false },
  { id: id++, name: `福州分行`, url: `#`, isInternal: false },
  { id: id++, name: `北京分行`, url: `#`, isInternal: false },
  { id: id++, name: `青岛分行`, url: `#`, isInternal: false },
  { id: id++, name: `济南分行`, url: `#`, isInternal: false },
  { id: id++, name: `大连分行`, url: `#`, isInternal: false },
]

const banks = []

banks.push(createUrlObj(`上海总行`,`#`, true))
banks.push(createUrlObj(`厦门分行`,`#`, true))
banks.push(createUrlObj(`杭州分行`,`#`, true))
banks.push(createUrlObj(`义乌分行`,`#`, true))
banks.push(createUrlObj(`温州分行`,`#`, true))
banks.push(createUrlObj(`天津分行`,`#`, true))
banks.push(createUrlObj(`宁波分行`,`#`, true))
banks.push(createUrlObj(`成都分行`,`#`, true))
banks.push(createUrlObj(`福州分行`,`#`, true))
banks.push(createUrlObj(`北京分行`,`#`, true))
banks.push(createUrlObj(`青岛分行`,`#`, true))
banks.push(createUrlObj(`济南分行`,`#`, true))
banks.push(createUrlObj(`大连分行`,`#`, true))

module.exports = {
  banks
}

const about = {}
const service = {}
const cases = {}
const news = {}

const faq = {

}

const contact = {

}
