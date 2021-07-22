დავალების აღწერა:
JavaScript-ის თავისებურობების შესახებ უკვე მოისმინეთ და გაიარეთ პატარა კურსიც. დროა, დაგროვილი ცოდნა პრაკტიკაში გამოვიყენოთ. უნდა დავწეროთ პატარა ვებ აპლიკაცია, html-ის და js-ის გამოყენებით. აპლიკაციაში უნდა შეგვეძლოს ქალაქის სახელის შეყვანა და ამინდის ძებნის გაშვება. თუ ამ ქალაქისთვის ვიპოვით ამინდს უნდა გამოვიტანოთ შესაბამისი ინფორმაცია, თუ არადა ვუთხრათ მომხმარებელს, რომ ასეთი
ქალაქი არ მოიძებნა.

ქალაქის სახელის შეყვანის შემდეგ უნდა გავიგოთ ახლანდელი ამინდი ამ სახელით არსებულ ქალაქში. ამისთვის ჩვენ გამოვიყენებთ API-ს: https://openweathermap.org/current კერძოდ კი წამოვიღებთ ინფორმაციას ამ მისამართიდან: https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={api_key}
ინფორმაციის წამოსაღებად უნდა გამოიყენოთ fetch-ი. მეტი ინფორმაცია fetch-ის შესახებ: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch. API-ის გამოსაყენებლად, როგორც ხედავთ საჭიროა api_key-ი ამიტომ მოგიწევთ ვებ გვერდზე რეგისტრაცია.

დაბრუნებული პასუხის მიხედვით თუ ქალაქზე მოიძებნა ამინდის ინფრომაცია უნდა ვაჩვენოთ გვერდზე ან უნდა ვუთხრათ მომხმარებელს, რომ ქალაქზე ინფორმაცია არ იძებნება.

აპლიკაციის შესაქმნელად დაგჭირდებათ მინიმუმ ორ ფაილიანი project-ი. პროექტის დირექტორიაში შექმენით index.html და index.js ფაილები. index.html-ში იქნება თქვენი html კოდი, ხოლო index.js-ში თქვენი ჯავასკრიპტი. ასევე შეგიძლიათ გამოიყენოთ css სტაილინგისთვის, მაგრამ სავალადებულო არაა. აპლიკაციის დეველოპმენტისას შეიძლება გამოგადგეთ VScode-ი და live server-ი. 

