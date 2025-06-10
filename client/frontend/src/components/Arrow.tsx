interface ArrowProps { ascending: boolean };

const Arrow = ({ ascending }: ArrowProps) => ascending ? "\u2191" : "\u2193";

export default Arrow;
