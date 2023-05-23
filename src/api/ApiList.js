import axios from 'axios'

export const apiPaymentXendit = async (data, type) => {
    let response = {};
    const baseUrl = `https://dev-api.importir.com/api/payment/custom-create-va`; //--staging
    // const baseUrl = `https://new-apiv2.importir.com/api/payment/custom-create-va`; //--production
    const configurationObject = {
      url: baseUrl,
      method: "POST",
      data: data,
    };
    
  
    try {
      const resp = await axios(configurationObject);
      response = resp.data;
    } catch (error) {
      console.log(error.message);
    }
    return response;
  };

  export const apiPaymentXenditRecurring = async (data, type) => {
    let response = {};
    // const baseUrl=`https://dev-api.importir.com/api/belanja-co-id/${type}`
    const baseUrl = `https://dev-api.importir.com/api/create-xendit-reccuring`; //--staging
    // const baseUrl = `https://new-apiv2.importir.com/api/create-xendit-reccuring`; //--production
    const configurationObject = {
      url: baseUrl,
      method: "POST",
      data: data,
    };
    
  
    try {
      const resp = await axios(configurationObject);
      response = resp.data;
    } catch (error) {
      console.log(error.message);
    }
    return response;
  };
  