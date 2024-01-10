import pdfMake from 'pdfmake/build/pdfmake'

export const createPdf = (data) => {
  const pdfGenerator = pdfMake.createPdf({
    pageSize: 'A7',
    header: [
      {
        text: 'Courier Hub',
        margin: 5,
        fontSize: '10',
        bold: true,
        alignment: 'center',
      },
    ],
    content: [
      {
        text: 'Receiver Details',
        fontSize: '7',
        bold: true,
        decoration: 'underline',
      },
      {
        text: `Name: ${data.receiver.name}\nPhone: ${data.receiver.phoneNumber}\nEmail: ${data.receiver.email}\nAddress: ${data.receiver.location}, ${data.receiver.city}, ${data.receiver.state}, ${data.receiver.country}, ${data.receiver.pincode}`,
        fontSize: '5',
        marginTop: 2,
      },
      {
        text: 'Sender Details',
        fontSize: '7',
        bold: true,
        decoration: 'underline',
        marginTop: 5,
      },
      {
        text: `Name: ${data.sender.name}\nPhone: ${data.sender.phoneNumber}\nEmail: ${data.sender.email}\nAddress: ${data.sender.location}, ${data.sender.city}, ${data.sender.state}, ${data.sender.country}, ${data.sender.pincode}`,
        fontSize: '5',
        marginTop: 2,
      },
      {
        text: 'Package Details',
        fontSize: '7',
        bold: true,
        decoration: 'underline',
        marginTop: 5,
      },
      {
        text: `Reference ID: ${data.id}\nItem Description: ${data.item}\nWeight: ${data.weight}`,
        fontSize: '5',
        bold: true,
        marginTop: 5,
      },
    ],
  })
  var win = window.open('', '_blank')
  pdfGenerator.print({}, win)
}

export const formatPrice = (number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
    }).format(number / 100);
  };

export const getRowsList = (couriersList) => {
    const rowsList = []
    couriersList.map((courier) => {
      const singleRow = {
        id: courier._id,
        item: courier.packageName,
        weight: courier.packageWeight,
        sender: courier.senderDetails,
        receiver: courier.receiverDetails,
        status: courier.departmentStatus,
        updatedDate: courier.updatedAt,
      }
      rowsList.push(singleRow)
    })
    return rowsList
  }