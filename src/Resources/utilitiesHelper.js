const utilities = {

    /* @TODO: Make Nicer Popup */
    handleNetworkResponse: (res) => {
      if (res.error) {
        alert('Error: ' + res.message);
      }
      else {
        alert('Warning: ' + res.message);
      }
    },

    unixToDateTime: (unixTimestamp) => {
      let date          = new Date(unixTimestamp*1000);
      let monthsStrings = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      
      let day     = date.getDate();
      let month   = monthsStrings[date.getMonth()];
      let year    = date.getFullYear();

      let hours   = "0" + date.getHours();
      let minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();

      if (new Date().getFullYear() === year) {
        return day + " " + month + ", " + hours.substr(-2) + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);
      }
      else {
        return day + " " + month + " " + year + ", " + hours.substr(-2) + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);
      }
    }

}

export default utilities;