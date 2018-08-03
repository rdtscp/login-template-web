const utilities = {

    /* @TODO: Make Nicer Popup */
    handleNetworkResponse: (res) => {
    if (res.error) {
      alert('Error: ' + res.mesasge);
    }
    else {
      alert('Warning: ' + res.message);
    }
  }

}

export default utilities;