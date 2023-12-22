function solution(phone_book) {
  const hashMap = new Map();

  phone_book.sort((a, b) => a.length - b.length);

  for (let i = 0; i < phone_book.length; i++) {
    const phoneNumber = phone_book[i];

    for (let j = 1; j <= phoneNumber.length; j++) {
      const prefix = phoneNumber.substring(0, j);

      if (hashMap.has(prefix)) {
        return false;
      }
    }

    hashMap.set(phoneNumber, true);
  }

  return true;
}
