import { curry, find, compose, prop, propEq } from 'ramda'
import Table from 'cli-table'
import rankings from './output.json'

const findCityForRankings = curry((rankings, city) => find(propEq('city', city), rankings))
const findCity = findCityForRankings(rankings)
const findCityColi = compose(prop('cost-of-living-index'), findCity)

/* Output tables */
const t = new Table({
  head: [ 'city', 'total budget', 'daily budget' ]
})

const main = (budget, stays = []) => {
  /*
    Colia - Cost of live Index Area
    The total area of the cost of living used to calculate the unit
    budget for the trip
  */
  const totColia = stays.reduce((acc, { city, days }) => acc + (days * +findCityColi(city)), 0)
  const unitBudget = budget / totColia

  return stays.map(({ city, days }) => {
    const dailyBudget = unitBudget * findCityColi(city)
    const totalBudget = dailyBudget * days

    t.push([ city, totalBudget, dailyBudget ])

    return { city, days, totalBudget, dailyBudget }
  })
}

const result = main(2000, [
  { city: 'London', days: 10 }, { city: 'Manchester', days: 10 },
  { city: 'San Jose', days: 9 }, { city: 'Panama City', days: 2 }
])

console.log(result)
console.log(result.reduce((acc, { totalBudget }) => acc + totalBudget, 0))

console.log(t.toString())
