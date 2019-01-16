use bucket_list;
db.dropDatabase();

db.goals.insertMany([
  {
    title: "Visit Buenos Aires",
    description: "Learn tango, ride horses and eat local food",
    completeBy: "2020-09-01",
    completeStatus: "No"
  }
  {
    title: "Get a Job as a Software Developer",
    description: "Aim to work in Silicon Valley for Apple.",
    completeBy: "2030-06-15",
    completeStatus: "No"
  }
  {
    title: "Ride the Fastest Roller Coaster in the World",
    description: "Save money to buy plane tickets and have some spending money. Contact Steven to arrange dates.",
    completeBy: "2020-04-5",
    completeStatus: "No"
  }
  {
    title: "Make a Billion Dollar Company",
    description: "Employ all of CodeClan G10 and aim to take over the world.",
    completeBy: "2019-04-01",
    completeStatus: "No"
  }


]);
