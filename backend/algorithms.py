class SortingAlgorithms:
    """
    A collection of sorting algorithms implemented as static methods.
    
    This class is designed to provide static methods for various sorting algorithms. 
    Each algorithm takes a list of elements and sorts them. Additional algorithms 
    can be added to this class as static methods to keep the sorting algorithms 
    organized and accessible.

    Current algorithms include:
    - Bubble Sort
    """
    

    @staticmethod
    def bubble_sort(arr: list) -> list:
        """
        Perform an in-place bubble sort on a list.

        @param arr: List of elements (numbers) that will be sorted in ascending order.
        @type arr: list

        @return: The same list object that was passed in, now sorted.
        @rtype: list

        The function works by repeatedly stepping through the list, comparing each pair 
        of adjacent items and swapping them if they are in the wrong order. The pass through 
        the list is repeated until no swaps are needed, which indicates that the list is sorted.
        
        This function modifies the list in place and also returns it.
        """
        n = len(arr)
        for i in range(n):
            swapped = False
            for j in range(0, n-i-1):
                if arr[j] > arr[j+1]:
                    arr[j], arr[j+1] = arr[j+1], arr[j]
                    swapped = True
            if not swapped:
                break
        return arr
    