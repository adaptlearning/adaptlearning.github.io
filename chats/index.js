(async function() {

  const cache = JSON.parse(localStorage.getItem('rooms') || '{}')
  let rooms = cache?.rooms
  if (!cache.timestamp || cache.timestamp - Date.now() > (24 * 60 * 60 * 1000)) {
    const allRooms = await (await fetch('https://gitter.ems.host/_matrix/client/v3/publicRooms', {
      method: 'get',
      referrer: "",
      mode: "cors"

    })).json()

    rooms = allRooms.chunk
      .filter(({ name }) => String(name).startsWith('adaptlearning/'))
      .map(room => {
        return {
          ...room,
          url: `https://app.gitter.im/#/room/${room.canonical_alias}?via=gitter.im`,
          avatar_url: `https://gitter.ems.host/_matrix/media/r0/thumbnail/${room.avatar_url.slice(6)}?width=64&height=64&method=crop`
        }
      })
    localStorage.setItem('rooms', JSON.stringify({
      timestamp: Date.now(),
      rooms
    }))
  }

  document.querySelector('#rooms').innerHTML = rooms.map(room => {
    return `
    <div class="row room">
      <div class="cell room__icon"><img src="${room.avatar_url}" /></div>
      <div class="cell room__name">
        <a target="_blank" href="${room.url}">${room.name}</a>
      </div>
      <div class="cell room_topic">
      ${room.topic.replace(/(http[^\s]*)/gm, '<a href="$1">$1</a>')}
      </div>
    </div>
    `
  }).join('')


})()
