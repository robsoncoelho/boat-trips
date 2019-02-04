export function request(param) {
  return fetch(
    `http://api.ntstage.com/v1/bookingsweb/availability?searchDate=${param}&routeId=4&amountResultsAfter=50&amountResultsBefore=0`
  ).then(response => Promise.all([response.json()]));
}
