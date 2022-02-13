import axios from 'axios';

const sampleUrl = '/dog/recommand/dogStyle?amountOfShedding=4&apartmentLiving=3&barkOrHowl=4&dogFriendly=3&easyToGroom=5&easyToTrain=2&energyLevel=1&family=2&intelligence=4&noviceOwners=3&playfullness=2&size=1&strangers=5&wanderlust=3'

const getSampleResultPromise = async () => {
  const config = {
    url: sampleUrl,
    method: 'GET'
  };

  const response = await axios(config);
  // console.log('res', response);

  const data = await response.data;
  // console.log('data', data);
  
  if (data) {
    return data;
  } else {
    throw Error(data);
  }
}

export default getSampleResultPromise;