

"<<<<<<<<<<<<<<<<< >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

# Points
>> Only an admin can perform the following actions with an admin account:
# username: 'michaelw',
# password: 'michaelwpass',


# Without authentication, normal users and admins cannot access different routes/pages.
#  Delete, update, and add options are only visible to admins. Only users can view recipes.
# I use NgRx to store user data. We filter only 'cuisine' and related images in an array from all recipes having nested images, and each image property stores multiple images. We store these in an array to use on display category by card.

# Filter: Get all arrays of tags and their arrays of images stored in nested objects of arrays.
# Custom Directive: Display CRUD buttons when an admin logs in.
# Fall-back message: Display a message before elements load on the UI.
# Lazy-loading: Optimize initial application loading by using lazy-loading.
Per-page lazy-loading: We use lazy-loading on some pages when elements are loading on the UI.
We use CanMatch and CanActivate. We create a custom function that works as pagination.

# NgStyle directive: Display different text colors based on difficulty level.
# Component wrapper: We use this to wrap different components and add similar behavior.
# Conditional rendering: We display different elements on the UI based on certain conditions.
# Prevent unnecessary function or API calls: We prevent reloading data when returning to the same route, so that our updated data is still present.
After logging out, sessionStorage will clear, so users need to log in again, and the token will be cleared as well."

