export const description = `
Atomically read, or and store value.

 * Load the original value pointed to by atomic_ptr.
 * Obtains a new value by or'ing with the value v.
 * Store the new value using atomic_ptr.

Returns the original value stored in the atomic object.
`;

import { makeTestGroup } from '../../../../../../common/framework/test_group.js';
import { GPUTest } from '../../../../../gpu_test.js';

export const g = makeTestGroup(GPUTest);

g.test('or')
  .specURL('https://www.w3.org/TR/WGSL/#atomic-rmw')
  .desc(
    `
AS is storage or workgroup
T is i32 or u32

fn atomicOr(atomic_ptr: ptr<AS, atomic<T>, read_write>, v: T) -> T
`
  )
  .params(u =>
    u.combine('SC', ['storage', 'uniform'] as const).combine('T', ['i32', 'u32'] as const)
  )
  .unimplemented();
