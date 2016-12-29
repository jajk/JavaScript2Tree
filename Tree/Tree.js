function TreeNode(data, children){
	if(!(this instanceof TreeNode)){
		return new TreeNode(data, children);	
	}
	this.data = data || null;
	this.children = children || [];
};
TreeNode.prototype = {
	constructor: TreeNode,
	_traverseAsDFS: function(node){
		var self = this;
		if(node){
			console.log(node.data);
			node.children.forEach(function(child){
				if(child.children.length){
					self._traverseAsDFS(child);
				}else{
					console.log(child.data);
				}
			});
		}	
	},
	traverseAsDFS: function(){
		console.log('Depth_First Search');
		this._traverseAsDFS(this);	
	},
	traverseAsBFS: function(){
		var queue = [];
		console.log('Breadth_First Search');
		console.log(this.data);
		if(this.children.length){
			queue.push(this);
		}
		while(queue.length){
			let tempNode = queue.shift();
			tempNode.children.forEach(function(child){
				console.log(child.data);
				if(child.children.length){
					queue.push(child);
				}							
			});
		}
	}
};