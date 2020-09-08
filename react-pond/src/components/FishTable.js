import FishTableRow from './FishTableRow.js';

var FishTable = () => (
  <table>
    <tbody>
      <FishTableRow name={name}/>
      <FishTableRow image={image}/>
      <FishTableRow description={description}/>
    </tbody>
  </table>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
FishTable.propTypes = {
  fishes: React.PropTypes.array.isRequired
};

export default FishTable;
