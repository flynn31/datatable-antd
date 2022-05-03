// import logo from './logo.svg';
import './App.css';
import Hometable from "./Component/home-table";
// import { DeveloperBoard } from '@mui/icons-material';

const sample_data = [
  {
    key: '1',
    // visitF: 14,
    visitF: '4/24/2022, 12:41:27 PM PDT',
    alertF: '3/16/2022, 1:19:58 PM PDT',
    regiF: "11/21/2020, 9:31:27 PM PST",

    id: 12300123,
    firstname: "DeveloperB",
    lastname: "IT",
    emailaddress: "minato2001@gmail.com",
    active: null,
    day_phone: "",
    ev_phone: "",
    mob_phone: "",
    countFavorites: 19,
    countSearches: 202,
    notificationcount: 5
  },
  {
    key: '2',
    // visitF: 27,
    visitF: '4/24/2021, 12:41:27 PM PDT',
    alertF: '3/15/2021, 1:19:58 PM PDT',
    regiF: "10/22/2020, 9:31:27 PM PST",

    id: 12300123,
    firstname: "DeveloperB",
    lastname: "IT",
    emailaddress: "minato2001@gmail.com",
    active: null,
    day_phone: "8586031512",
    ev_phone: "",
    mob_phone: "",
    countFavorites: 1,
    countSearches: 2,
    notificationcount: 53
  },
  {
    key: '3',
    // visitF: 13,
    visitF: '4/24/2020, 12:41:27 PM PDT',
    alertF: '2/15/2022, 1:19:58 PM PDT',
    regiF: "11/22/2022, 9:31:27 PM PST",

    id: 12300123,
    firstname: "DeveloperB",
    lastname: "IT",
    emailaddress: "minato2001@gmail.com",
    active: null,
    day_phone: "",
    ev_phone: "",
    mob_phone: "8586031512",
    countFavorites: 5,
    countSearches: 100,
    notificationcount: 99
  },
  {
    key: '4',
    // visitF: 24,
    visitF: '4/24/2019, 12:41:27 PM PDT',
    alertF: '3/21/2023, 1:19:58 PM PDT',
    regiF: "11/05/2020, 9:31:27 PM PST",

    id: 12300123,
    firstname: "DeveloperB",
    lastname: "IT",
    emailaddress: "minato2001@gmail.com",
    active: null,
    day_phone: "",
    ev_phone: "8586031512",
    mob_phone: "",
    countFavorites: 37,
    countSearches: 532,
    notificationcount: 61
  }
];

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Hometable data={sample_data} />
    </div>
  );
}

export default App;
