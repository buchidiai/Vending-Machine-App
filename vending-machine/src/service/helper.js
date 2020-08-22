export const getChangeDenomination = (total) => {
  const QUARTER = (0.25).toFixed(2);
  const DIME = (0.1).toFixed(2);
  const NICKEL = (0.05).toFixed(2);
  const PENNY = (0.01).toFixed(2);

  let totals = total.toFixed(2);

  let quarter = 0,
    dime = 0,
    nickel = 0,
    pennie = 0;

  let change = {};

  while (totals >= QUARTER) {
    quarter++;
    totals = (totals - QUARTER).toFixed(2);
  }

  while (totals >= DIME) {
    dime++;
    totals = (totals - DIME).toFixed(2);
  }

  while (totals >= NICKEL) {
    nickel++;
    totals = (totals - NICKEL).toFixed(2);
  }

  while (totals >= PENNY) {
    pennie++;
    totals = (totals - PENNY).toFixed(2);
  }

  change.quarters = quarter;
  change.dimes = dime;
  change.nickels = nickel;
  change.pennies = pennie;

  return change;
};
