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

      let formattedTime = day + " " + month + " " + year + " at " + hours.substr(-2) + ":" + minutes.substr(-2) + ':' + seconds.substr(-2);
      return formattedTime;
    }

}

export default utilities;