function ListNode(val) {
  this.val = val
  this.next = null
}

function linkedList(arr) {
  let list = new ListNode(arr[0])
  let selectedNode = list
  for (let i = 1; i < arr.length; i++) {
    selectedNode.next = new ListNode(arr[i]);
    selectedNode = selectedNode.next
  }
  return list
}

function listToArray(l1) {
  let ret = []
  for (; ;) {
    if (l1.next == null) {
      ret.push(l1.val)
      return ret
    } else {
      ret.push(l1.val)
      l1 = l1.next
    }
  }
}

let addTwoNumber = function (l1, l2) {
  let node = null
  let carry = arguments[2]
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0
    const val2 = l2 ? l2.val : 0
    const next1 = l1 ? l1.next : null
    const next2 = l2 ? l2.next : null
    const val = carry ? val1 + val2 + 1 : val1 + val2
    node = new ListNode(val % 10)
    node.next = addTwoNumber(next1, next2, val >= 10)
  } else if (carry) {
    node = new ListNode(1)
    node.next = null
  }
  return node
}

let l1 = linkedList([2, 4, 3])
let l2 = linkedList([5, 6, 4])

console.log([listToArray(l1), listToArray(l2)])
console.log(listToArray(addTwoNumber(l1, l2)))
