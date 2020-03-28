const calculateTotalCost = ({ usage, price }) =>
usage.reduce((summ, call) => summ + call.duration, 0) * price;

const Report = ({
data: {
  title,
  year,
  month,
  client: { name, lastName, email, phoneNumber },
  price,
  currency,
  usage
}
}) => {
return (
  <div>
    <h3>{title}</h3>
    <h6>
      {year}/{month}
    </h6>
    <section>
      <div>
        {lastName} {name}
        <br />
        {email} <br /> {phoneNumber}
      </div>
    </section>
    <h5>Report</h5>
    <div>
      Total Cost: {calculateTotalCost(reportData)} {currency}
    </div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>From</th>
          <th>To</th>
          <th>Duration</th>
          <th>Price</th>
          <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {usage.map(({ when, from, to, duration }) => (
          <tr key={when}>
            <td>{when}</td>
            <td>{from}</td>
            <td>{to}</td>
            <td>{duration}</td>
            <td>
              {price} {currency}
            </td>
            <td>
              {Math.ceil(price,  duration,  100) / 100} {currency}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
};

const reportData = {
title: "Usage Report",
year: 2020,
month: 3,
client: {
  name: "Andrey",
  lastName: "Burov",
  email: "promourkaine@gmail.com",
  phoneNumber: "16504501516"
},
price: 0.35,
currency: "UAH",
usage: [
  {
    when: "2020/03/01 12:45:00",
    from: "1234567",
    to: "0987654",
    duration: 3
  },
  {
    when: "2020/03/03 12:45:00",
    from: "1234567",
    to: "0987654",
    duration: 14
  },
  {
    when: "2020/03/08 12:45:00",
    from: "1234567",
    to: "0987654",
    duration: 30
  }
]
};

ReactDOM.render(
<Report data={reportData} a="e" />,
document.getElementById("report")
);