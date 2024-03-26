function solve(clawPos, boxes, boxInClaw) {
    // Calculate average box height
    const totalBoxes = boxes.reduce((total, num) => total + num);
    const avgHeight = totalBoxes / boxes.length;

    // Find stack with max height
    const maxHeightIndex = boxes.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

    // Find stack with min height
    const minHeightIndex = boxes.reduce((iMin, x, i, arr) => x < arr[iMin] ? i : iMin, 0);
    
    if (!boxInClaw) {
        if (clawPos < maxHeightIndex) {
            return 'RIGHT';
        } else if (clawPos > maxHeightIndex) {
            return 'LEFT';
        } else {
            return 'PICK';
        }
    } else {
        if (clawPos < minHeightIndex) {
            return 'RIGHT';
        } else if (clawPos > minHeightIndex) {
            return 'LEFT';
        } else {
            return 'PLACE';
        }
    }
}

