// Event images extracted from the provided Excel file
export const eventImages: Record<string, string> = {
  'Pakistan Day': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCNiepzWgmnxUIVXuG5auzl3MbmU6GrVSgJ5C6gbitRlOiWmx0-60DnV-tF33iN1vv_o&usqp=CAU',
  'Labour Day': 'https://images.pexels.com/photos/6725341/pexels-photo-6725341.jpeg',
  'Independence Day': 'https://images.pexels.com/photos/9176472/pexels-photo-9176472.jpeg',
  'Christmas': 'https://images.pexels.com/photos/1671878/pexels-photo-1671878.jpeg',
  'Eid ul-Fitr (Start)': 'https://images.pexels.com/photos/12049052/pexels-photo-12049052.jpeg',
  'Eid ul-Fitr (End)': 'https://images.pexels.com/photos/12049052/pexels-photo-12049052.jpeg',
  'Eid ul-Adha (Start)': 'https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg',
  'Eid ul-Adha (End)': 'https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg',
  'Start of Muharram': 'https://images.pexels.com/photos/26841371/pexels-photo-26841371.jpeg',
  'Milad-un-Nabi': 'https://blog.muslimandquran.com/wp-content/uploads/2022/09/Shutterstock_2041578365.jpg',
  'Nowruz': 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  'Basant Festival': 'https://blog.muslimandquran.com/wp-content/uploads/2022/09/Shutterstock_2041578365.jpg',
  'Baisakhi': 'https://sikhyatra.pk/wp-content/uploads/baisakhi-2014.jpg',
  "International Women's Day": 'https://images.pexels.com/photos/30786527/pexels-photo-30786527.jpeg',
  'World Forest Day': 'https://images.pexels.com/photos/534584/pexels-photo-534584.jpeg',
  'World Water Day': 'https://www.konfluxtheatre.co.uk/sites/default/files/Happy-World-Water-Day-Images.jpg',
  'World Environment Day': 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
  'International Friendship Day': 'https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg',
  'International Literacy Day': 'https://images.pexels.com/photos/12719357/pexels-photo-12719357.jpeg',
  "World Teachers' Day": 'https://etvbharatimages.akamaized.net/etvbharat/prod-images/05-10-2024/1200-675-22601155-573-22601155-1727975382067.jpg',
  'Defence Day of Pakistan': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-g3RqbGhgkyldd_P9L2aclAlMCaSIFYtF-A&s',
  'Youm-e-Takbeer': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztwC_rUznlxadY2KRgh4usTCceQnpDpMt_w&s'
};

export const getEventImage = (eventName: string): string => {
  return eventImages[eventName] || 'https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg';
};