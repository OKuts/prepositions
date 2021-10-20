export const roundData = (data) => data.map(el => [Math.random(), el]).sort().map(el => el[1]);
