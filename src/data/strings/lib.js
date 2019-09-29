// todo
import JSONStringsBackend from './jsonStringsBackend';
import StringsFrontend from './strings';

const Strings = new StringsFrontend(new JSONStringsBackend());

// export one StringsFrontend instance
export default Strings;
