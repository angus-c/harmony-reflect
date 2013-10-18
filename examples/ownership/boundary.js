// Copyright (C) 2013 Software Languages Lab, Vrije Universiteit Brussel

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * A "boundary" abstraction implemented using generic membranes, based
 * on the paper:
 *
 * Ownership, Filters & Crossing Handlers, Wernli et al, DLS 2012
 *
 * For background, see the `README.md` file.
 *
 * @author tvcutsem
 */

// require('reflect.js')
// require('examples/generic_membrane.js')

(function(exports){
  "use strict";
  
  // makeGenericMembrane(initWetTarget, dry2wetHandler, wet2dryHandler)
  
  exports.Boundary = Boundary;
  
}(typeof exports !== "undefined" ? exports : this));