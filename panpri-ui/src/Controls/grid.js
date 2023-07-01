import React, { useMemo } from 'react';
import { MaterialReactTable } from 'material-react-table';

//nested data is ok, see accessorKeys in ColumnDef below

const Grid = ({data, columns}) => {
  return <MaterialReactTable columns={columns} data={data} />;
};

export default Grid;