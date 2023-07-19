// template strings/literals

const recipient = "James";
const sender = "Chisaneme Aloni";

// Break the email string into multiple lines
const email = `Hey ${recipient}!
 How is it going?
 Cheers ${sender}`;

console.log(email);

// Adding a continuation line(\) allows it to still be in one line when consoled
// `Hey ${recipient}!\
//  How is it going?\
//  Cheers ${sender}`;
