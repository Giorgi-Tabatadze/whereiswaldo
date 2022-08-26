# whereiswaldo

The Goal of this project is to create a game similar to the popular game "where
is waldo" however it is going to be different popual cartoon themed. 
Game will have several features. 

---------------------------------------------------------------------------------

1.1 Main feature is to show the image and allow user to select a location on the
image where they think character that they are looking for is located. This will
be achieved through tracking mouse event coordinates and checking it with a 
referance coordinates on the backed with firebase. (Aiming Logic)(Validation Logic on backend)

1.2 any click should give a popup window with names of the characters that are 
left to be found. (popups for names)

1.3 each selection of the character should give a responce on whether or not 
correct location has been clicked. It could be achieved with a popup. (Popups for correct or incorrect)

1.4 Characters that are found should be appropriately marked eather on the header
where we have a list of characters or on the map itself. (Shows Characters)

1.5 after winning the game allow to type the name for the leaderboard. (End Game save username and save data for backend)

1.6 track the time and show it on the top of the page. (shows time)

---------------------------------------------------------------------------------

2.1 First page is going to present us with some instructions on how to play the 
game. (How to play Popup)

2.2 Home page is going to be showing us different levels in form of cards. Each
card will lead to the relevant image and start the particular game. (level cards)

---------------------------------------------------------------------------------

3.1 Leaderboard shows the names of the best participants in the game. This is
restricted for bad words, which is going to be checked in the front end. 

3.2 Show the best time and the date of the submition of the attempt. 

3.3 Each level will have its own leaderboard which will be stored in the backed 
with firebase. 

3.4 Leaderboard has a level selector style viewer where you can observe the leaderboard. for each level (Retreive Data for each Leaderboard)



Logical Parts

1. Header 
(Navbar)
(Shows Characters)
(shows time)

2. Level Selector 
(level cards)
(How to play Popup)

3. Main Game 
(image)
(popups for names)
(Aiming Logic)
(Validation Logic on backend)
(Popups for correct or incorrect)
(End Game save username and save data for backend)

4. Leaderboard 
(Retreive Data for each Leaderboard)
(Retreive each username data)
