function TOH(n, s, d, temp) {
  // If only one disc, move it to desitination
  if(n === 1) {
    print(1, s, d);
  } else {
    // Move n-1 from source to temp
    TOH(n - 1, s, temp, d);

    // Move n from source to destination
    print(n, s, d);

    // Move n-1 from temp to destination
    TOH(n - 1, temp, d, s);
  }
  return;
}

function print(disk, a, b) {
  console.log(`Moved Disk ${disk} from ${a} to ${b}`);
}

TOH(5, 'source', 'destination', 'temp');