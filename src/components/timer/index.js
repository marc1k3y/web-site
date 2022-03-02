export function TimeCounter() {

  const prevTime = 1609459200000
  const currentTime = Date.now()

  let diff = currentTime - prevTime

  let days = Math.floor(diff / (1000 * 60 * 60 * 24))
  diff -= days * (1000 * 60 * 60 * 24)

  let hours = Math.floor(diff / (1000 * 60 * 60))
  diff -= hours * (1000 * 60 * 60)

  let mins = Math.floor(diff / (1000 * 60))
  diff -= mins * (1000 * 60)

  let seconds = Math.floor(diff / (1000))
  diff -= seconds * (1000)

  const res = `${days} days, ${hours} hours, ${mins} minutes, ${seconds} seconds`

  return res
}