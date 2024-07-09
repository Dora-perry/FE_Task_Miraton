export const getCoordinatesFromState = (address: string) => {
    const predefinedLocations: Record<string, { latitude: string; longitude: string }> = {
      'Abia': { latitude: '5.4527', longitude: '7.5248' },
      'Adamawa': { latitude: '9.3265', longitude: '12.3984' },
      'Akwa Ibom': { latitude: '5.0389', longitude: '7.9098' },
      'Anambra': { latitude: '6.2209', longitude: '7.0676' },
      'Bauchi': { latitude: '10.3157', longitude: '9.8442' },
      'Bayelsa': { latitude: '4.7719', longitude: '6.0699' },
      'Benue': { latitude: '7.1904', longitude: '8.1340' },
      'Borno': { latitude: '11.8847', longitude: '13.1510' },
      'Cross River': { latitude: '5.9640', longitude: '8.3503' },
      'Delta': { latitude: '5.8904', longitude: '5.6800' },
      'Ebonyi': { latitude: '6.2649', longitude: '8.0135' },
      'Edo': { latitude: '6.5244', longitude: '5.8987' },
      'Ekiti': { latitude: '7.7187', longitude: '5.3119' },
      'Enugu': { latitude: '6.5244', longitude: '7.5178' },
      'Gombe': { latitude: '10.2903', longitude: '11.1710' },
      'Imo': { latitude: '5.5720', longitude: '7.0588' },
      'Jigawa': { latitude: '12.2280', longitude: '9.5616' },
      'Kaduna': { latitude: '10.5105', longitude: '7.4165' },
      'Kano': { latitude: '12.0022', longitude: '8.5919' },
      'Katsina': { latitude: '12.9881', longitude: '7.6172' },
      'Kebbi': { latitude: '12.4506', longitude: '4.1992' },
      'Kogi': { latitude: '7.7337', longitude: '6.6918' },
      'Kwara': { latitude: '8.9669', longitude: '4.5632' },
      'Lagos': { latitude: '6.5244', longitude: '3.3792' },
      'Nasarawa': { latitude: '8.5480', longitude: '7.7116' },
      'Niger': { latitude: '9.0820', longitude: '6.5623' },
      'Ogun': { latitude: '7.1604', longitude: '3.3568' },
      'Ondo': { latitude: '7.2508', longitude: '5.2105' },
      'Osun': { latitude: '7.5629', longitude: '4.5171' },
      'Oyo': { latitude: '7.8429', longitude: '3.9313' },
      'Plateau': { latitude: '9.2182', longitude: '9.5172' },
      'Rivers': { latitude: '4.8242', longitude: '7.0336' },
      'Sokoto': { latitude: '13.0059', longitude: '5.2476' },
      'Taraba': { latitude: '8.0016', longitude: '10.2744' },
      'Yobe': { latitude: '12.2841', longitude: '11.3951' },
      'Zamfara': { latitude: '12.1222', longitude: '6.2238' },
      'Abuja': { latitude: '9.0578', longitude: '7.4951' },
    };
  
    const state = Object.keys(predefinedLocations).find(key =>
      address.toLowerCase().includes(key.toLowerCase())
    );
  
    if (state) {
      return predefinedLocations[state];
    } else {
      return { latitude: '0.0000', longitude: '0.0000' };
    }
  };
  