const userOperations = [
    ["BTC", "USD"],
    ["BNS", "XBT"],
    ["DOGE", "ADA"],
    ["ETH", "BTC"],
    ["ADA", "ETH"],
    ["XBT", "DOGE"]
  ];

  const {log} = console;

  log(userOperations.flat());
  
  function findPath(fl) {
    let   from = null;
    let   res  = [];
    const dest = [];
    const map  = {};
  
    for (let i = 0; i < fl.length; i++) {
        map[fl[i][0]] = fl[i][1];
        dest.push(fl[i][1]);
    }

    for (let i = 0; i < fl.length; i++) {
        if (false === dest.includes(fl[i][0])) from = fl[i][0];
    }     

    
    while (Object.keys(map).includes(from)) {
        res.push(from);
        from = map[from];
    }


    res.push(from);

    log(res.join(','));
  }

  findPath(userOperations);
  