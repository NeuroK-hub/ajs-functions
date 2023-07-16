export default function healthCalc(player) {
  const indicate = { healthy: 51, wounded: 15, critical: 0 };
  return Object.keys(indicate).find((name) => indicate[name] <= player.health);
}
