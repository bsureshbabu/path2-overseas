import { AppConstants } from './../services/app-constants';
import * as moment from 'moment';

export default class Utils {
  // getCurrentFinancialYear
  static getCurrentFinancialYear() {
    let financialYear = '';
    const today = new Date();
    if (today.getMonth() + 1 <= 3) {
      financialYear =
        today.getFullYear() -
        1 +
        '-' +
        today
          .getFullYear()
          .toString()
          .substring(2);
    } else {
      financialYear =
        today.getFullYear() +
        '-' +
        (today.getFullYear() + 1).toString().substring(2);
    }
    return financialYear;
  }

  // get ordinal suffix
  static getOrdinalSuffixOf(i) {
    const j = i % 10,
      k = i % 100;
    if (j == 1 && k != 11) {
      return i + 'st';
    }
    if (j == 2 && k != 12) {
      return i + 'nd';
    }
    if (j == 3 && k != 13) {
      return i + 'rd';
    }
    return i + 'th';
  }

  // convert Date object  to DD/MM/YYYY
  static convertDateObjToDDMMYYYY(date) {
    // const MMDDYYYY = date.toLocaleDateString().split('/');
    // const DDMMYYYY = MMDDYYYY[1] + '/' + MMDDYYYY[0] + '/' + MMDDYYYY[2];
    const DDMMYYYY =
      date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    return DDMMYYYY;
  }

  // convert Date object  to YYYY-MM-DD   with if date/month lessthan 10 adding '0'.
  static convertDateObjToYYYYMMDD(date) {
    // const YYYYMMDD = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    if (date) {
      const YYYY = date.getFullYear();
      const MM =
        date.getMonth() + 1 < 10
          ? '0' + (date.getMonth() + 1)
          : date.getMonth() + 1;
      const DD = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
      return YYYY + '-' + MM + '-' + DD;
    }
    if (date == null) {
      return '';
    }
  }

  // formating date with  "/" insted of "-"
  static formatDateWithSlash(date) {
    if (date) {
      return date.replace(/-/g, '/');
    } else {
      return '';
    }
  }

  // convert Date from DD/MM/YYYY to YYYY/MM/DD
  static convertDateToYYYYMMDD(date) {

    console.log(date);
    if (date) {
      const DDMMYYYY = date.split('/');
      const YYYYMMDD = DDMMYYYY[2] + '/' + DDMMYYYY[1] + '/' + DDMMYYYY[0];
      return YYYYMMDD;
    }
    else {
      return '';
    }
  }

  // convert YYYY-MM-DD to DD-MM-YYYY  with if date/month lessthan 10 adding '0'.
  static convertYYYYMMDDToDDMMYYYY(date) {

    if (date) {
      const dateSplited = date.split('-');
      const DDMMYYYY = dateSplited[2] + '-' + dateSplited[1] + '-' + dateSplited[0];
      return DDMMYYYY;
    }
    if (date == null) {
      return '';
    }
  }

  // to get the Weekday as string from nubmer(getDay)
  static convertGetDateToWeekDay(date) {
    let dateObj = new Date(date);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dateObj.getDay()];
  }

  // Get age from the Date OF Birth
  static ageFromDateOfBirth(DOB) {
    let dateOfBirth = new Date(DOB).getTime();
    let timeDiff = Math.abs(Date.now() - dateOfBirth);
    let age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    return age;
  }

  // Convert number to MonthString
  static convertNoToMonthString(number) {
    let MONTH_TYPE = [
      {
        id: 1,
        month: 'January',

      },
      {
        id: 2,
        month: 'February'
      },
      {
        id: 3,
        month: 'March'
      },
      {
        id: 4,
        month: 'April'
      },
      {
        id: 5,
        month: 'May'
      },
      {
        id: 6,
        month: 'June'
      },
      {
        id: 7,
        month: 'July'
      },
      {
        id: 8,
        month: 'August'
      },
      {
        id: 9,
        month: 'September'
      },
      {
        id: 10,
        month: 'October'
      },
      {
        id: 11,
        month: 'November'
      },
      {
        id: 12,
        month: 'December'
      }
    ];
    for (let month of MONTH_TYPE) {
      if (month.id == number) {
        return month.month;
      }
    }
  }

    // Convert number to MonthString
    static finacialyearmonth(number) {
      let MONTH_TYPE = [
        {
          no:4,
          id: 1,
          month: 'April',
  
        },
        {
          no:5,
          id: 2,
          month: 'May'
        },
        {
          no:6,
          id: 3,
          month: 'June'
        },
        {
          no:7,
          id: 4,
          month: 'July'
        },
        {
          no:8,
          id: 5,
          month: 'August'
        },
        {
          no:9,
          id: 6,
          month: 'September'
        },
        {
          no:10,
          id: 7,
          month: 'October'
        },
        {
          no:11,
          id: 8,
          month: 'November'
        },
        {
          no:12,
          id: 9,
          month: 'December'
        },
        {
          no:1,
          id: 10,
          month: 'January'
        },
        {
          no:2,
          id: 11,
          month: 'February'
        },
        {
          no:3,
          id: 12,
          month: 'March'
        }
      ];
      for (let month of MONTH_TYPE) {
        if (month.no == number) {
          return month.id;
        }
      }
    }

  // getDaysInThisMonth
  static getDaysInThisMonth() {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  }

  // get days In given Month,Year()
  static getDaysInGivenMonth(date1, date2) {
    const now = date1;
    const nowmonth = date2;
    return new Date(date1, date2, 0).getDate();
  }
  // get first Day in every month
  static getDaysInEveryMonth() {
    const date = new Date();
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  static addmonthsToDate(date, month) {
    console.log("Month",month);
    var c = date;
    var d = c.getDate();
    c.setMonth(c.getMonth() + month);
    if (c.getDate() != d) {
      c.setDate(0);
    }
    return Utils.convertDateObjToYYYYMMDD(c)

  }

  static getTimestamp(timestamp) {

    return moment(timestamp * 1000).format('DD-MM-YYYY, HH:mm:ss');

  }

  static convertObjToArray(obj) {
    let array = [];
    for (var key of Object.keys(obj)) {
      let formattedObj = { key: key, value: obj[key] };
      console.log('formattedObj', formattedObj);
      array.push(formattedObj);
    }
    return array;

  }

  static convertDMYTOYMD(DMY) {

    return moment(DMY, 'DD-MM-YYYY').format('YYYY-MM-DD');

  }
  static convertYMDTODMY(YMD) {

    return moment(YMD, 'YYYY-MM-DD').format('DD-MM-YYYY');

  }

  static formatDate(date) {
    // var d = new Date(date),
    //     monthsconvert = '' + (d.getMonth() + 1),
    //     daysconvert = '' + d.getDate(),
    //     yearconvert = d.getFullYear();

    // if (monthsconvert.length < 2) monthsconvert = '0' + monthsconvert;
    // if (daysconvert.length < 2) daysconvert = '0' + daysconvert;

    // return [daysconvert, monthsconvert,yearconvert ].join('-');
    console.log("date",date);
    return moment(date, 'YYYY-MM-DDTHH:mm:ss').format('DD-MM-YYYY, HH:mm:ss');
}

  constructor(private _appConstants: AppConstants) { }
}
