let wire1 = ['R1008', 'U428', 'L339', 'U16', 'R910', 'U221', 'R53', 'D546', 'L805', 'U376', 'L19', 'U708', 'R493', 'D489', 'L443', 'D567', 'R390', 'D771', 'R270', 'U737', 'R926', 'U181', 'L306', 'D456', 'L668', 'D79', 'L922', 'U433', 'L701', 'U472', 'R914', 'U903', 'L120', 'U199', 'L273', 'D206', 'L967', 'U711', 'R976', 'U976', 'R603', 'U8', 'L882', 'U980', 'R561', 'D697', 'L224', 'D620', 'L483', 'U193', 'R317', 'D588', 'L932', 'D990', 'R658', 'U998', 'L136', 'U759', 'R463', 'U890', 'L297', 'U648', 'R163', 'U250', 'R852', 'U699', 'R236', 'D254', 'L173', 'U720', 'L259', 'U632', 'L635', 'U426', 'R235', 'D699', 'R411', 'U650', 'L258', 'D997', 'L781', 'D209', 'L697', 'D306', 'L793', 'U657', 'L936', 'U317', 'R549', 'D798', 'L951', 'D80', 'R591', 'D480', 'R835', 'U292', 'L722', 'U987', 'L775', 'U173', 'R353', 'U404', 'L250', 'U652', 'L527', 'D282', 'L365', 'D657', 'L141', 'D301', 'R128', 'D590', 'L666', 'U478', 'L85', 'D822', 'L716', 'U68', 'R253', 'D186', 'R81', 'U741', 'L316', 'D615', 'L570', 'U407', 'L734', 'D345', 'L652', 'U362', 'L360', 'D791', 'R358', 'U190', 'L823', 'U274', 'L279', 'D998', 'L16', 'D644', 'L201', 'D469', 'R213', 'D487', 'L251', 'D395', 'R130', 'U902', 'L398', 'U201', 'L56', 'D850', 'R541', 'D661', 'R921', 'U647', 'R309', 'D550', 'L307', 'D68', 'R894', 'U653', 'L510', 'D375', 'R20', 'U86', 'R357', 'D120', 'L978', 'D200', 'L45', 'D247', 'R906', 'U334', 'L242', 'D466', 'R418', 'U548', 'R698', 'D158', 'R582', 'U469', 'L968', 'U736', 'R196', 'U437', 'R87', 'D722', 'R811', 'U625', 'L425', 'D675', 'L904', 'D331', 'R693', 'D491', 'R559', 'U540', 'L120', 'D975', 'R180', 'U224', 'R610', 'U260', 'L769', 'D486', 'R93', 'D300', 'L230', 'U181', 'L60', 'U910', 'L60', 'D554', 'L527', 'U37', 'R69', 'D649', 'R768', 'D835', 'L581', 'U932', 'L746', 'U170', 'L733', 'U40', 'L497', 'D957', 'R12', 'U686', 'R85', 'D461', 'R796', 'D142', 'R664', 'U787', 'R636', 'D621', 'R824', 'D421', 'R902', 'D686', 'L202', 'D839', 'R567', 'D129', 'L77', 'D917', 'L200', 'D106', 'R3', 'D546', 'L101', 'D762', 'R780', 'U334', 'L410', 'D190', 'R431', 'D828', 'L816', 'D529', 'R648', 'D449', 'L845', 'U49', 'R750', 'U864', 'L133', 'D822', 'R46', 'U475', 'L229', 'U929', 'L676', 'D793', 'R379', 'U71', 'L243', 'U640', 'L122', 'U183', 'R528', 'U22', 'R375', 'D928', 'R292', 'U796', 'R259', 'U325', 'L921', 'U489', 'L246', 'D153', 'L384', 'D684', 'L243', 'U65', 'L342', 'U662', 'R707'];

let wire2 = ['L1008', 'D243', 'L602', 'D497', 'L395', 'U81', 'R589', 'U94', 'R640', 'D965', 'L397', 'D781', 'R464', 'U642', 'L130', 'D740', 'R938', 'D260', 'L106', 'D323', 'L626', 'U869', 'L495', 'U450', 'R640', 'D675', 'R602', 'D449', 'L542', 'U917', 'L244', 'U702', 'L644', 'D809', 'R902', 'U163', 'R118', 'U982', 'L867', 'D795', 'R546', 'U194', 'R397', 'D877', 'L354', 'D255', 'L477', 'U45', 'L707', 'D624', 'R806', 'U642', 'L926', 'D233', 'L800', 'U691', 'L990', 'D979', 'L431', 'U999', 'L423', 'D794', 'L238', 'U25', 'R986', 'U595', 'L167', 'U480', 'L555', 'U831', 'R496', 'U799', 'L897', 'D895', 'L993', 'D11', 'R486', 'U176', 'L90', 'U842', 'R499', 'U792', 'R787', 'U859', 'L100', 'U169', 'R170', 'D89', 'R297', 'D944', 'R362', 'D460', 'R147', 'U831', 'L45', 'U972', 'R582', 'D90', 'L934', 'U284', 'R555', 'U235', 'L138', 'U837', 'R965', 'U915', 'R928', 'U982', 'R157', 'D566', 'L953', 'U653', 'L629', 'U460', 'L335', 'D912', 'R355', 'D683', 'L710', 'D562', 'R392', 'D44', 'R707', 'D979', 'L749', 'D223', 'L776', 'D723', 'R735', 'D356', 'R49', 'U567', 'L563', 'D220', 'L868', 'U223', 'R448', 'D505', 'L411', 'U662', 'L188', 'D536', 'R55', 'U718', 'L108', 'D289', 'R435', 'U98', 'R775', 'U933', 'L127', 'D84', 'R253', 'D523', 'L2', 'D905', 'R266', 'U675', 'R758', 'D331', 'R122', 'U988', 'R215', 'D500', 'R89', 'U306', 'R833', 'U763', 'R570', 'D818', 'L985', 'U127', 'L87', 'D210', 'R355', 'D532', 'R870', 'U196', 'R695', 'U633', 'R170', 'D540', 'R506', 'U708', 'L663', 'U566', 'L633', 'U306', 'L452', 'U180', 'R463', 'D21', 'L220', 'D268', 'R608', 'U986', 'L493', 'D598', 'L957', 'D116', 'L454', 'D584', 'L405', 'U651', 'R352', 'U681', 'R807', 'U767', 'L988', 'U692', 'R474', 'U710', 'R607', 'U313', 'R711', 'U12', 'R371', 'D561', 'R72', 'U522', 'R270', 'U904', 'L49', 'U525', 'R562', 'U895', 'L232', 'D319', 'R902', 'D236', 'L601', 'D816', 'R836', 'U419', 'R610', 'U644', 'L733', 'U355', 'L836', 'U228', 'L895', 'D39', 'L44', 'D848', 'L965', 'U475', 'R56', 'U62', 'L458', 'U99', 'R236', 'D763', 'R912', 'U295', 'R515', 'U179', 'R20', 'D777', 'R511', 'D906', 'R903', 'U855', 'L507', 'D512', 'L63', 'D630', 'R442', 'U595', 'L701', 'U654', 'R238', 'D35', 'L31', 'D469', 'R6', 'D222', 'R132', 'D837', 'R921', 'U838', 'R986', 'D441', 'L950', 'D530', 'L397', 'U41', 'L81', 'D60', 'L245', 'D75', 'R620', 'D455', 'L937', 'D180', 'R215', 'D684', 'R724', 'U561', 'R479', 'D353', 'L501'];

function getNextPoint(origin, action) {
    const nextPoint = {...origin};
    if (action.startsWith('R')) {
        nextPoint.x += parseInt(action.substr(1));
    } else if (action.startsWith('L')) {
        nextPoint.x -= parseInt(action.substr(1));
    } else if (action.startsWith('U')) {
        nextPoint.y += parseInt(action.substr(1));
    } else {
        nextPoint.y -= parseInt(action.substr(1));
    }
    return nextPoint;
}

function isBetweenPoints(comparator, start, end) {
    return (start <= comparator && end >= comparator) || (end <= comparator && start >= comparator);
}

function getIntersection(wire1Origin, wire1Dest, wire2Origin, wire2Dest) {
    const isYAction = wire2Origin.x === wire2Dest.x;
    const isYIntersection = isYAction
        && isBetweenPoints(wire2Origin.x, wire1Origin.x, wire1Dest.x)
        && isBetweenPoints(wire1Origin.y, wire2Origin.y, wire2Dest.y);
    const isXIntersection = !isYAction
        && isBetweenPoints(wire2Origin.y, wire1Origin.y, wire1Dest.y)
        && isBetweenPoints(wire1Origin.x, wire2Origin.x, wire2Dest.x);
    if (isYIntersection || isXIntersection) {
        return (isYAction ?
                { x: wire2Origin.x, y: wire1Origin.y } :
                { x: wire1Origin.x, y: wire2Origin.y }
        );
    }
    else return null;
}

function calculateDist(nextPoint, currentPoints) {
    const lastPoint = currentPoints[currentPoints.length - 1];
    let origin = currentPoints[0];
    let dist = lastPoint.dist + Math.abs(lastPoint.x - nextPoint.x) + Math.abs(lastPoint.y - nextPoint.y);
    for (let i = 1; i < currentPoints.length; i++) {
        let dest = currentPoints[i];
        const intersection = getIntersection(origin, dest, lastPoint, nextPoint);
        if (intersection) {
            dist = origin.dist;
            dist += Math.abs(origin.x - intersection.x) + Math.abs(origin.y - intersection.y);
            dist += Math.abs(intersection.x - nextPoint.x) + Math.abs(intersection.y - nextPoint.y);
            return dist;
        }
        origin = dest;
    }
    return dist;
}

//wire1 = ['R8', 'U5', 'L5', 'D3'];
//wire2 = ['U7', 'R6', 'D4', 'L4'];

// wire1 = ['R75', 'D30', 'R83', 'U83', 'L12', 'D49', 'R71', 'U7', 'L72'];
// wire2 = ['U62', 'R66', 'U55', 'R34', 'D71', 'R55', 'D58', 'R83'];

// wire1 = ['R98', 'U47', 'R26', 'D63', 'R33', 'U87', 'L62', 'D20', 'R33', 'U53', 'R51'];
// wire2 = ['U98', 'R91', 'D20', 'R16', 'D67', 'R40', 'U7', 'R15', 'U6', 'R7'];

const wire1Points = [{x: 0, y: 0, dist: 0 }];
const wire2Points = [{x: 0, y: 0, dist: 0 }];

for (let i = 0; i < wire1.length; i++) {
    const previousPoint = wire1Points[wire1Points.length - 1];
    const nextPoint = getNextPoint(previousPoint, wire1[i]);
    nextPoint.dist = calculateDist(nextPoint, wire1Points);
    wire1Points.push(nextPoint);
}

for (let i = 0; i < wire2.length; i++) {
    const previousPoint = wire2Points[wire2Points.length - 1];
    const nextPoint = getNextPoint(previousPoint, wire2[i]);
    nextPoint.dist = calculateDist(nextPoint, wire2Points);
    wire2Points.push(nextPoint);
}

const intersectionPoints = [];

let currentWire2Origin = wire2Points[0];
for (let i = 1; i < wire2Points.length; i++) {
    const nextWire2Point = wire2Points[i];
    let currentWire1Origin = wire1Points[0];
    for (let j = 1; j < wire1Points.length; j++) {
        const nextWire1Point = wire1Points[j];
        const intersectionPoint = getIntersection(currentWire1Origin, nextWire1Point, currentWire2Origin, nextWire2Point);
        if (intersectionPoint) {
            intersectionPoint.combinedDist = currentWire2Origin.dist +
                Math.abs(currentWire2Origin.x - intersectionPoint.x) +
                Math.abs(currentWire2Origin.y - intersectionPoint.y) +
                currentWire1Origin.dist +
                Math.abs(currentWire1Origin.x - intersectionPoint.x) +
                Math.abs(currentWire1Origin.y - intersectionPoint.y)
            ;
            intersectionPoint.manhattanDist = Math.abs(intersectionPoint.x) + Math.abs(intersectionPoint.y);
            intersectionPoints.push(intersectionPoint);
        }
        currentWire1Origin = nextWire1Point;
    }
    currentWire2Origin = nextWire2Point;
}

intersectionPoints.shift();

let min = intersectionPoints[0].combinedDist;
for (let i = 1; i < intersectionPoints.length; i++) {
    min = Math.min(min, intersectionPoints[i].combinedDist);
}
console.log(min);

min = intersectionPoints[0].manhattanDist;
for (let i = 1; i < intersectionPoints.length; i++) {
    min = Math.min(min, intersectionPoints[i].manhattanDist);
}
console.log(min);

console.log(intersectionPoints);
//console.log(wire1Points);
//console.log(wire2Points);
