router.get('/users/:page', async (req, res, next) => {
    // Declaring variable
    const resPerPage = 20; // results per page
    const page = req.params.page || 1; // Page
    try {
    // Find Demanded Products - Skipping page values, limit results       per page
    const foundUsers = await User.find()
          .skip((resPerPage * page) - resPerPage)
          .limit(resPerPage);
    // Count how many products were found
    const numOfUsers = foundUsers.length
    // Renders The Page
    res.status(200).json({
       users: foundUsers, 
       currentPage: page, 
       pages: Math.ceil(numOfUsers / resPerPage),  
       numOfResults: numOfUsers
      });
     }
     catch (err) {
      res.status(500).json(err);
    }
    });
