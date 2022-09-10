const DropdownComponent = ( {setData, ...props}) => {
  const type = props.type;
  const data = props.data;

  if (type === "state") {
    return (
      <select onChange={(e) =>
        setData({ ...data, home: e.target.value })
      }>
        <option value=""></option>
        <option value="al">Alabama</option>
        <option value="ak">Alaska</option>
        <option value="az">Arizona</option>
        <option value="ar">Arkansas</option>
        <option value="ca">California</option>
        <option value="co">Colorado</option>
        <option value="ct">Connecticut</option>
        <option value="de">Delaware</option>
        <option value="dc">District Of Columbia</option>
        <option value="fl">Florida</option>
        <option value="ga">Georgia</option>
        <option value="hi">Hawaii</option>
        <option value="id">Idaho</option>
        <option value="il">Illinois</option>
        <option value="in">Indiana</option>
        <option value="ia">Iowa</option>
        <option value="ks">Kansas</option>
        <option value="ky">Kentucky</option>
        <option value="la">Louisiana</option>
        <option value="me">Maine</option>
        <option value="md">Maryland</option>
        <option value="ma">Massachusetts</option>
        <option value="mi">Michigan</option>
        <option value="mn">Minnesota</option>
        <option value="ms">Mississippi</option>
        <option value="mo">Missouri</option>
        <option value="mt">Montana</option>
        <option value="ne">Nebraska</option>
        <option value="nv">Nevada</option>
        <option value="nh">New Hampshire</option>
        <option value="nj">New Jersey</option>
        <option value="nm">New Mexico</option>
        <option value="ny">New York</option>
        <option value="nc">North Carolina</option>
        <option value="nd">North Dakota</option>
        <option value="oh">Ohio</option>
        <option value="ok">Oklahoma</option>
        <option value="or">Oregon</option>
        <option value="pa">Pennsylvania</option>
        <option value="ri">Rhode Island</option>
        <option value="sc">South Carolina</option>
        <option value="sd">South Dakota</option>
        <option value="tn">Tennessee</option>
        <option value="tx">Texas</option>
        <option value="ut">Utah</option>
        <option value="vt">Vermont</option>
        <option value="va">Virginia</option>
        <option value="wa">Washington</option>
        <option value="wv">West Virginia</option>
        <option value="wi">Wisconsin</option>
        <option value="wy">Wyoming</option>
      </select>
    );
  } else if (type === "vehicleMake") {
    return (
      <div>
        <select
          data-placeholder="Make"
          
          tabIndex="2"
          id="make"
          onChange={(e) =>
            setData({ ...data, vehicleMake: e.target.value })
          }
        >
          <option value=""></option>
          <option value="Other">Other</option>
          <option value="ACURA">ACURA</option>
          <option value="ASTON MARTIN">ASTON MARTIN</option>
          <option value="AUDI">AUDI</option>
          <option value="BENTLEY">BENTLEY</option>
          <option value="BMW">BMW</option>
          <option value="BUICK">BUICK</option>
          <option value="CADILLAC">CADILLAC</option>
          <option value="CHEVROLET">CHEVROLET</option>
          <option value="CHRYSLER">CHRYSLER</option>
          <option value="DODGE">DODGE</option>
          <option value="FERRARI">FERRARI</option>
          <option value="FORD">FORD</option>
          <option value="GMC">GMC</option>
          <option value="HONDA">HONDA</option>
          <option value="HUMMER">HUMMER</option>
          <option value="HYUNDAI">HYUNDAI</option>
          <option value="INFINITI">INFINITI</option>
          <option value="ISUZU">ISUZU</option>
          <option value="JAGUAR">JAGUAR</option>
          <option value="JEEP">JEEP</option>
          <option value="KIA">KIA</option>
          <option value="LAMBORGHINI">LAMBORGHINI</option>
          <option value="LAND ROVER">LAND ROVER</option>
          <option value="LEXUS">LEXUS</option>
          <option value="LINCOLN">LINCOLN</option>
          <option value="LOTUS">LOTUS</option>
          <option value="MASERATI">MASERATI</option>
          <option value="MAYBACH">MAYBACH</option>
          <option value="MAZDA">MAZDA</option>
          <option value="MERCEDES-BENZ">MERCEDES-BENZ</option>
          <option value="MERCURY">MERCURY</option>
          <option value="MINI">MINI</option>
          <option value="MITSUBISHI">MITSUBISHI</option>
          <option value="NISSAN">NISSAN</option>
          <option value="PONTIAC">PONTIAC</option>
          <option value="PORSCHE">PORSCHE</option>
          <option value="ROLLS-ROYCE">ROLLS-ROYCE</option>
          <option value="SAAB">SAAB</option>
          <option value="SATURN">SATURN</option>
          <option value="SUBARU">SUBARU</option>
          <option value="SUZUKI">SUZUKI</option>
          <option value="TOYOTA">TOYOTA</option>
          <option value="VOLKSWAGEN">VOLKSWAGEN</option>
          <option value="VOLVO">VOLVO</option>
        </select>
      </div>
    );
  } else if (type === "vehicleModel") {
    return (
      <div>
        <select
          data-placeholder="Model"
          onChange={(e) =>
            setData({ ...data, vehicleModel: e.target.value })
          }
          tabIndex="3"
          id="model"
        >
          <option value=""></option>
          <option value="Other">Other</option>
          <option value="COMMANDER">COMMANDER</option>
          <option value="COMPASS">COMPASS</option>
          <option value="GRAND CHEROKEE">GRAND CHEROKEE</option>
          <option value="LIBERTY">LIBERTY</option>
          <option value="PATRIOT">PATRIOT</option>
          <option value="WRANGLER">WRANGLER</option>
        </select>
      </div>
    );
  }
};

export default DropdownComponent;
