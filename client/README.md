# Cleridae

Cleridae is a web application that allows users to create and share blog posts within its community. Each blog post will keep track of the number of Likes, and will allow other users to comment on the blogs, creating interesting discussions about the topics covered in the blogs!

To encourage popularity and usage, the website will track which users and which blog posts receive the most comments and likes.

Users will be able to create a network of friends, and see their blog posts in a feed.

The home page of the site will show the most popular blog posts on the site. Logged in users will also be able to switch to a feed of the most recent posts from their friends network.

When viewing a blog post, users will be able to select the author of the blog post, and see their other posts. Each blog will have a comments section, where users can write nice things about the blog. The author of the blog will have the power to delete comments in their comments section, juuuust in case they aren’t nice comments. Users who post comments will also be able to delete and edit comments that they have posted.

Our database structure will be as follows:
User data will be stored in its own database. The user table will have the following information stored:
UserID (primary key)
UserName
Password
EmailAddress
TotalLikes
BlogCommentsTotal

User Friend Data will also have it’s own table:
UserID (foreign key)
FriendID (foreign key)

User Blog Data will also have it’s own table with the following information:
UserID
BlogID
BlogTitle
BlogContent
NumberOfLikes
CreateDate
Tag1
Tag2
Tag3

Blog Comment Data will be stored in a relational database with the following info:
CommentID
BlogID
UserID(author)
CommentContent
CreateDate
LastEditDate
