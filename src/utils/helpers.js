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